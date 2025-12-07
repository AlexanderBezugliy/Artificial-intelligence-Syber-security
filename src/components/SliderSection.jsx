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
                        <div key={pageIndex} className='min-w-full grid grid-cols-2 md:grid-cols-3 hero-xxl:grid-cols-5 gap-2 sm:gap-[30px] px-7 hero-xxl:px-0 select-none'>
                            {currentCards.map((card) => (
                                <div key={card.id} className='bg-gray-800 text-gray-400 text-center rounded-xl p-3 sm:p-[30px] flex flex-col items-center gap-3 sm:gap-[30px] h-full'>
                                    {/* pointer-events-none, чтобы картинка не мешала тянуть */}
                                    <div className='grow flex items-center'>
                                        <img src={card.img} alt="icon" className='max-w-[30px] sm:max-w-[98px] pointer-events-none' /> 
                                    </div>
                                    <h2 className='font-semibold sm:font-bold text-[12px] sm:text-[16px] lg:text-[25px] text-gray-300 mb-3 leading-tight pointer-events-none'>{card.title}</h2>
                                    <p className='hidden sm:block font-extrabold  text-[12px] lg:text-[16px] pointer-events-none'>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            {/* dots */}
            <div className='flex justify-center gap-4 py-10'>
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