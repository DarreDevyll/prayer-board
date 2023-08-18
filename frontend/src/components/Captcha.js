import { Box, CheckBox, Check, Default, CaptchaBox, Message, Image, Input, SubmitCaptcha } from "./styles/Captcha.styled";
import React, { useState, useRef } from 'react';
import { Req } from "./styles/UserCreationForm.styled";
import Value from '../captcha'

var run = false;
var image;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomNumber(min, max) {
    image = Math.floor(Math.random() * (max - min) + min)
    return image;
}

export var time = null;
export var input = null;

async function Stopwatch () {
    var counter = 0;
    while (run && run)
    {
        counter += .01;
        await sleep(10);
    }
    time = counter.toFixed(2);
}

function StartWatch() {
    run = true;
    Stopwatch();
}

function Stop() {
    run = false;
}

export default function Captcha () {
    const nameForm = useRef(null);
    const [clicks, setClicks] = useState([]);

    function submitCaptcha() {
        Stop();
        setClicks([...clicks, 1]);
        const form = nameForm.current;
        //input = form['captcha'].value.toLowerCase();
        if (form['captcha'].value.toLowerCase() == Value[image])
        {
            input = true;
        } else {
            input = false;
        }
    }

    return (
        <>
        <Box isClicked={clicks > 0}>
            <Default required type="checkbox" onClick={StartWatch}/>
            <CheckBox>Complete Captcha<Req>*</Req>
                <Check />
            </CheckBox>
            <CaptchaBox>
                <Image src={"captcha/"+randomNumber(0,5)+".jpg"} />
                <Message>Enter the text into the field below: </Message>
                <form ref={nameForm}><Input name={'captcha'} />
                <SubmitCaptcha type="button" required onClick={submitCaptcha}>Submit Captcha</SubmitCaptcha>
                </form>
            </CaptchaBox>
        </Box>
        </>
    )
}