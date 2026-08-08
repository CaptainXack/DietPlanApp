const fs=require('fs');
const cp=require('child_process');
const b64=fs.readFileSync('vmu-source.tgz.b64','utf8').trim();
fs.writeFileSync('vmu-source.tgz',Buffer.from(b64,'base64'));
cp.execFileSync('tar',['-xzf','vmu-source.tgz','--strip-components=1'],{stdio:'inherit'});
console.log('VMU v2.5 source unpacked');
