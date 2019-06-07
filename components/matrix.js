import React, { Component } from 'react';

export const GLOBAL_WINDOW = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global) || this;

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class CanvasComponent extends React.Component {
    
    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }
    
    updateCanvas() {
        const canvas =  this.refs.canvas;
        canvas.width = GLOBAL_WINDOW.innerWidth - 20 ;
        canvas.height = GLOBAL_WINDOW.innerHeight;
        const ctx = canvas.getContext('2d');
        // ctx.fillRect(0, 0, 500, 300);
        // draw children “components”
        // rect({ctx, x: 10, y: 10, width: 50, height: 50});
        // rect({ctx, x: 110, y: 110, width: 50, height: 50});

        var letters = 'CODEPRISM';
        letters = letters.split('');
        // Setting up the drops

        // Setting up the columns
        var fontSize = 20,
        columns = canvas.width / fontSize;

        var drops = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        }

        this.interval = setInterval(() => {
            this.draw(ctx, canvas, drops, letters, fontSize);
        }, 100);     
    }

    // Setting up the draw function
    draw = (ctx, canvas, drops, letters, fontSize) => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < drops.length; i++) {
            var text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = '#0f0';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                drops[i] = 0;
            }
        }
    }

    render() {
         return (
             <canvas ref="canvas"/>
         );
    }
}

export default CanvasComponent;