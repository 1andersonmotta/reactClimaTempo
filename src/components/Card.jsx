import React from 'react';

function Card() {
    return (
        <div className='bg-white p-6 mt-10 rounded-lg shadow-md'>
            <div className='text-center'>
                <span className='block text-xl font-bold text-slate-700'>Nome da Cidade</span>
                <span className='text-slate-400 text-sm font-medium'>Estado, Pais</span>
            </div>

            <div className='font-bold text-slate-700 flex mt-4 mb-2'>
                <span className='text-7xl'>27</span>
                <span className='text-2xl mt-2'>ºC</span>
            </div>

            <div className='text-center'>
                <span className='block'>Icone</span>
                <span className='text-slate-700 font-medium'>Nublado</span>
            </div>


        </div>
    );
}

export default Card;