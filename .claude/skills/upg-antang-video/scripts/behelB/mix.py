import subprocess
SFX='/home/user/ruma-video/.claude/skills/produksi-video-klinik/scripts/sfx/'
DUR=53.6
ev=[('notif',0.12,1.0,-22),('whoosh',2.95,0.9,-22),('pop',3.3,0.5,-21),('pop',7.02,0.6,-18),('pop',8.8,0.5,-20),('pop',11.98,0.5,-20),
 ('whoosh',12.9,0.9,-22),('pop',13.05,0.4,-24),
 ('pop',15.15,0.4,-19),('whoosh',20.7,0.8,-24),('pop',20.78,0.4,-19),('whoosh',25.24,0.8,-24),('pop',25.31,0.4,-19),('scaler',25.6,2.6,-30),
 ('whoosh',28.6,0.8,-24),('pop',28.7,0.4,-19),('pop',32.14,0.35,-23),('pop',32.62,0.35,-23),('pop',33.46,0.35,-23),
 ('whoosh',34.35,0.9,-22),('pop',34.5,0.4,-21),('whoosh',37.65,0.9,-22),('pop',37.75,0.5,-20),
 ('whoosh',42.15,0.9,-22),('pop',42.22,0.5,-20),('notif',43.55,1.0,-22),('whoosh',46.47,0.9,-22),('pop',46.6,0.5,-20),
 ('whoosh',50.25,0.9,-21),('pop',50.4,0.6,-19)]
inp=['-i','narA.mp3','-f','lavfi','-i',f'anoisesrc=color=brown:amplitude=0.6:d={DUR},lowpass=f=420,highpass=f=60,volume=0.035']
fl=['[0:a]adelay=300|300,loudnorm=I=-16:TP=-1.5:LRA=7,apad=whole_dur=%s[v]'%DUR,'[1:a]afade=t=in:d=0.6,afade=t=out:st=%s:d=1.2[amb]'%(DUR-1.4)]
labs=['[v]','[amb]']
for i,(f,t,d,db) in enumerate(ev):
    inp+=['-i',SFX+f'sfx_{f}.mp3'];idx=i+2;ms=int(t*1000)
    fl.append(f'[{idx}:a]atrim=0:{d},afade=t=out:st={max(0,d-0.25)}:d=0.25,volume={db}dB,adelay={ms}|{ms},apad=whole_dur={DUR}[s{i}]');labs.append(f'[s{i}]')
fl.append(''.join(labs)+f'amix=inputs={len(labs)}:normalize=0,alimiter=limit=0.95,atrim=0:{DUR}[out]')
subprocess.run(['ffmpeg','-v','error','-y',*inp,'-filter_complex',';'.join(fl),'-map','[out]','-ar','48000','-ac','2','track.wav'],check=True);print('ok')
