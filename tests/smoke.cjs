const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(require('path').join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(source);
function boot(stored){const els={};let persisted;const ctx={console,Date,setTimeout:()=>{},localStorage:{getItem:()=>stored,setItem:(k,v)=>persisted=v},document:{getElementById:id=>els[id]??=( {style:{},classList:{add(){},remove(){}},querySelector(){return null}}),addEventListener(){} }};vm.createContext(ctx);vm.runInContext(source,ctx);return {ctx,els,run:s=>vm.runInContext(s,ctx),saved:()=>persisted};}
let app=boot(null);assert.equal(app.run('PLAN.length'),40);assert.equal(app.run('new Set(PLAN.map(x=>x.id)).size'),40);for(let w=1;w<=8;w++)assert.equal(app.run(`PLAN.filter(x=>x.week===${w}).length`),5);assert.equal(app.run("PLAN.filter(x=>state[x.id].status==='done').length"),2);assert.match(app.els.distanceValue.innerHTML,/5.34/);
for(const [id,total] of [['w1-mon',25],['w1-thu',30],['w1-sat',35],['w2-mon',34],['w2-thu',42],['w2-sat',40],['w3-mon',31]]){assert.equal(app.run(`timeline(PLAN.find(x=>x.id==='${id}')).reduce((s,r)=>s+r.len,0)`),total);assert(!app.run(`timeline(PLAN.find(x=>x.id==='${id}')).some(r=>/:60/.test(r.time))`));}
assert.equal(app.run("timeline(PLAN.find(x=>x.id==='w8-sat'))"),null);
assert.equal(app.run("validDate('2026-02-30')"),false);assert.equal(app.run("validDate('<img src=x onerror=alert(1)>')"),false);
for(const v of ['null','[]','invalid'])assert.match(boot(v).els.progressValue.innerHTML,/2 /);
app.run("state['w2-mon']={date:'2026-11-10',status:'done',distance:'4.25',duration:'40',notes:'saved progress'};save()");let restored=boot(app.saved());assert.equal(restored.run("state['w2-mon'].notes"),'saved progress');assert.equal(restored.run("state['w2-mon'].date"),'2026-11-10');assert.match(restored.els.progressValue.innerHTML,/3 /);
let bad=boot(JSON.stringify({'w1-mon':{date:'<img src=x>',status:'evil',distance:'Infinity',duration:-1,notes:'<b>text</b>'}}));assert.equal(bad.run("state['w1-mon'].date"),'2026-10-30');assert.equal(bad.run("state['w1-mon'].distance"),'');
console.log('PASS: JS syntax, 40 sessions / 8 weeks, Zepp defaults, 7 timed guides, distance guide, malformed storage, date/metric validation, persistence.');
