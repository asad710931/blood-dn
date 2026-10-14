'use client';
import {useRef,useEffect} from 'react';
import { FcApproval } from "react-icons/fc";

interface chartCircleValue{
    bloodGivenDate:string,
    daysToWait?:number,
    markedColor?:string,
}
export default function CicleInfo({bloodGivenDate='',daysToWait=57,markedColor='#f94144'}:chartCircleValue){
    const cnvRef=useRef<HTMLCanvasElement | null>(null);
    let difPerMs = new Date().getTime() - new Date(bloodGivenDate).getTime()
    
    let days=Math.ceil(difPerMs/(1000*60*60*24));

    let wholeBlood = Number(daysToWait);
    let dayleft=wholeBlood-days
    let total = (Math.PI*2)/wholeBlood;
    let daysInfo='Days,Wait';

    //----------
    let counter=0;
    

    useEffect(()=>{
        if((dayleft<=0)||(dayleft>=daysToWait+1)||(bloodGivenDate==='')){
            daysInfo="Eligable";
            days=daysToWait;
         }
        const canvas = cnvRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext("2d");
        if(!ctx) return;
        let dpr = window.devicePixelRatio|1;
        const rect = canvas.getBoundingClientRect();

        canvas.width=rect.width*dpr;
        canvas.height=rect.width*dpr;

        canvas.style.width=`${rect.width}px`;
        canvas.style.height=`${rect.height}px`;


        ctx.scale(dpr,dpr)
        console.log(canvas.width,canvas.height)

        //writing text on canvas
        ctx.font='bold 25px "Trebuchet MS", sans-serif';
        ctx.fillStyle="#2f2e2e";
        ctx.textAlign='left',
        ctx.textBaseline='middle';
        ctx.fillText((dayleft<=0||dayleft>=57||bloodGivenDate==''?'100%':dayleft).toString(),35,65);
        ctx.font='14px "Trebuchet MS", sans-serif';
        ctx.fillStyle="#3172be";
        ctx.fillText(daysInfo,35,80);
        //make react on canvas

        //ctx.fillStyle="green";
        //ctx.fillRect(0,0,20,20)

        //circle
        ctx.beginPath();
        ctx.arc(65,65,50,0,2*Math.PI)
        ctx.strokeStyle="#e1dfdeba";
        ctx.lineWidth=25;
        ctx.stroke()

        let angle=-2.5;
        ctx.beginPath();
        ctx.arc(65,65,50,angle,total*days+angle)
        //ctx.strokeStyle="#5d9ee8";
        ctx.strokeStyle=markedColor;
        ctx.lineWidth=24;
        ctx.stroke();



      //  dawcirlc()

    },[]);


    return(
        <main>
            <div>
                <canvas
                 ref={cnvRef}
                 className='w-[130px] h-[130px]'
                />
            </div>
        </main>
    )

}