import React, { useState } from 'react'
import { sliderData } from '../assets';

const SliderSection = () => {
    const [activePage, setActivePage] = useState(1); //активные 5 слайдов
    const [startX, setStartX] = useState(0); //где мы НАЖАЛИ

    // начало "зажатия"
    const handleStart = (e) => {
        // если это тачскрин (e.touches), берем координаты пальца, если мышь - координаты мыши
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        setStartX(x);
    };

    // конец "зажатия"
    const handleEnd = (e) => {
        // e.changedTouches для мобилок, e.clientX для мыши
        const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        
        const distance = startX - endX;// считаем разницу

        // протащили влево больше чем на 50px -> СЛЕДУЮЩИЙ
        if (distance > 30 && activePage < 2) {
            setActivePage(activePage + 1);
        }
        // протащили вправо больше чем на 50px -> ПРЕДЫДУЩИЙ
        if (distance < -30 && activePage > 0) {
            setActivePage(activePage - 1);
        }
    };

    const pages = [0, 1, 2];

    return (
        <section className='w-full bg-[#001427] overflow-hidden'>
            <div
                onTouchStart={handleStart}
                onTouchEnd={handleEnd}
                onMouseDown={handleStart}
                onMouseUp={handleEnd}

                className='flex transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing'
                style={{ transform: `translateX(-${activePage * 100}%)` }} 
            >
                {pages.map((pageIndex) => {
                    const currentCards = sliderData.slice(pageIndex * 5, (pageIndex + 1) * 5);

                    return (
                        <div key={pageIndex} className='min-w-full grid grid-cols-5 gap-[30px] select-none'>
                            {currentCards.map((card) => (
                                <div key={card.id} className='bg-gray-800 rounded-xl p-6 flex flex-col items-start h-full'>
                                    {/* pointer-events-none, чтобы картинка не мешала тянуть */}
                                    <img src={card.img} alt="icon" className='mb-4 pointer-events-none' /> 
                                    <h2 className='text-white text-xl font-bold mb-3 leading-tight pointer-events-none'>{card.title}</h2>
                                    <p className='text-gray-400 text-sm pointer-events-none'>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            {/* DOTS */}
            <div className='flex justify-center gap-4 mt-12'>
                {pages.map((pageIndex) => (
                    <button
                        key={pageIndex}
                        onClick={() => setActivePage(pageIndex)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 
                            ${activePage === pageIndex ? 'bg-[#3A68B8] scale-125' : 'bg-gray-600'}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default SliderSection