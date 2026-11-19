import subprocess
SFX='/home/user/ruma-video/.claude/skills/produksi-video-klinik/scripts/sfx/'
DUR=44.4
ev=[('notif',0.35,0.8,-24),('notif',0.95,0.8,-24),('notif',1.55,0.8,-23),
 ('whoosh',5.8,0.9,-22),('pop',5.9,0.4,-21),('pop',6.3,0.4,-22),('pop',8.0,0.35,-21),('pop',10.3,0.35,-21),('pop',11.98,0.35,-21),
 ('whoosh',13.85,0.9,-22),('pop',13.95,0.4,-21),('pop',15.84,0.45,-20),('pop',19.04,0.45,-19),('whoosh',19.95,0.7,-24),('pop',20.3,0.3,-22),('pop',21.68,0.3,-21),('pop',23.16,0.4,-19),
 ('whoosh',25.62,0.9,-22),('pop',25.72,0.4,-21),('pop',27.9,0.35,-20),('pop',29.36,0.35,-20),('pop',30.42,0.35,-20),('scaler',30.3,0.8,-31),('pop',31.46,0.35,-20),
 ('whoosh',32.7,0.9,-22),('pop',34.7,0.35,-21),('pop',35.54,0.35,-21),
 ('whoosh',36.2,0.9,-22),('pop',36.3,0.4,-22),('notif',38.95,0.9,-22),('pop',39.0,0.3,-23),('whoosh',39.45,0.9,-21),('pop',39.6,0.6,-19)]
inp=['-i','narB.mp3','-f','lavfi','-i',f'anoisesrc=color=brown:amplitude=0.6:d={DUR},lowpass=f=420,highpass=f=60,volume=0.035']
fl=['[0:a]adelay=300|300,loudnorm=I=-16:TP=-1.5:LRA=7,apad=whole_dur=%s[v]'%DUR,'[1:a]afade=t=in:d=0.6,afade=t=out:st=%s:d=1.2[amb]'%(DUR-1.4)]
labs=['[v]','[amb]']
for i,(f,t,d,db) in enumerate(ev):
    inp+=['-i',SFX+f'sfx_{f}.mp3'];idx=i+2;ms=int(t*1000)
    fl.append(f'[{idx}:a]atrim=0:{d},afade=t=out:st={max(0,d-0.25)}:d=0.25,volume={db}dB,adelay={ms}|{ms},apad=whole_dur={DUR}[s{i}]');labs.append(f'[s{i}]')
fl.append(''.join(labs)+f'amix=inputs={len(labs)}:normalize=0,alimiter=limit=0.95,atrim=0:{DUR}[out]')
subprocess.run(['ffmpeg','-v','error','-y',*inp,'-filter_complex',';'.join(fl),'-map','[out]','-ar','48000','-ac','2','track.wav'],check=True);print('ok')
