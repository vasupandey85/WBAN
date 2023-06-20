import React from 'react';
import Cards from './Cards.mjs';
import style from '../style.module.css';

export default function Symptoms() {
    let cardio = [
        {
            title: 'pain',
            imgURL: 'src/cardio1.png',
        },
        {
            title: 'restlessness',
            imgURL: 'src/cardio2.png'

        },
    ];
    
    let neuro = [];
    let gastric = [];
    let bones = [];
    let general = [];

    return (
        <div className="container row mx-1">
            <Cards title={'My Card'} desc={'This is desc'} />
            <Cards title={'My Card'} desc={'This is desc'} />
            <Cards title={'My Card'} desc={'This is desc'} />
            <Cards title={'My Card'} desc={'This is desc'} />
        </div>
    )
}