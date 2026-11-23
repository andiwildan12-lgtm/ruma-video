import json,subprocess
K=json.load(open('cfg.json'))['K'];DUR=K['total']
E=[]
def e(f,t,db,d=None):E.append((f,t,db,d))
W='whoosh';C='click'
e('pop',0.6,-21);e(C,K['celah']+0.2,-18);e('pop',K['fol1'],-15);e(C,K['fol1']+0.5,-19)
e(W,K['sehat']-0.1,-22);e('snap',K['sehat']+0.5,-20);e(W,K['lewat']+0.3,-22)
e(C,K['kok'],-18);e(W,K['kok']+0.2,-23)
for k in ('c1','c2','c3','c4'):e(C,K[k],-17);e('pop',K[k]+0.4,-21)
e('crack',K['c4']+0.3,-23)
e(W,K['kunyah'],-21);e('snap',K['kunyah']+1.1,-19)
for i in range(5):e('pop',K['kuman']+i*0.15,-24)
e('pulse',K['kuman']+1.2,-19);e('floss',K['darah']+0.4,-18);e('pop',K['darah']+0.9,-17);e('pop',K['darah']+1.1,-19);e(C,K['tanda'],-19)
e(C,K['cara'],-17);e('floss',K['cara']+0.4,-17);e('floss',K['cara']+1.3,-19);e('pulse',K['cungkil']+0.5,-19)
e(W,K['rutin'],-22);e('shimmer',K['rutin']+0.3,-20)
for i in range(4):e(C,K['rutin']+0.6+i*0.6,-23)
e(W,K['tutup'],-22);e(C,K['tutup']+0.4,-18);e(C,K['periksa'],-18);e('shimmer',K['periksa']+2.0,-15);e('snap',K['periksa']+2.2,-18)
e(W,K['cta'],-21);e('pop',K['cta']+0.8,-17)
for i in range(3):e('pop',K['tulis']+0.1+i*0.45,-16)
for i in range(3):e(C,K['tulis']+1.6+i*0.7,-20)
e('pop',K['follow'],-14);e(C,K['follow']+0.5,-18)
e('pop',K['card'],-18);e('shimmer',K['card']+0.1,-15)
ins=['-i','take.mp3','-f','lavfi','-i',f'anoisesrc=color=brown:amplitude=0.6:d={DUR},lowpass=f=420,highpass=f=60,volume=0.035']
fl=['[0:a]adelay=300|300,loudnorm=I=-16:TP=-1.5:LRA=7,apad=whole_dur=%s[v]'%DUR,'[1:a]afade=t=in:d=0.6,afade=t=out:st=%s:d=0.5[amb]'%(DUR-0.5)]
lab=['[v]','[amb]']
for i,(f,t,db,d) in enumerate(E):
    ins+=['-i',f'sfx/sfx_{f}.mp3'];j=i+2;ms=int(max(0,t)*1000)
    tr=f'atrim=0:{d},afade=t=out:st={d-0.4}:d=0.4,' if d else ''
    fl.append(f'[{j}:a]{tr}aformat=channel_layouts=stereo,volume={db}dB,adelay={ms}|{ms}[s{i}]');lab.append(f'[s{i}]')
fl.append(''.join(lab)+f'amix=inputs={len(lab)}:normalize=0:duration=first,alimiter=limit=0.89,atrim=0:{DUR}[out]')
subprocess.run(['ffmpeg','-y','-v','error']+ins+['-filter_complex',';'.join(fl),'-map','[out]','-ar','48000','-ac','2','track.wav'],check=True);print(len(E),'events')
