import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './style.css';

export default function ListaDejets() {
  return (
    <div>
      <Titulo />

      <div className="lista">
        <ItemLista 
          jet="Dassault Mirage IV"
          kmh="Km/h" kmResult="2450"
          propulsion="Propulsion(Kp)" propulsionResult="8100"
          kg="Kg" kgResult="11.170"
          wgp="Wingspan(M)" wgpResult="5"
          length="Length(M)" lengthResult="13"
          autonomy="Autonomy(Km)" autonomyResult="1300"
          imagem="assets/Dassault_MirageIV.jpg"/>

        <ItemLista 
          jet="Dassault Mirage 4000" 
          kmh="Km/h" kmResult="2670"
          propulsion="Propulsion(Kp)" propulsionResult="9000"
          kg="Kg" kgResult="10.370"
          wgp="Wingspan(M)" wgpResult="11"
          length="Length(M)" lengthResult="11"
          autonomy="Autonomy(Km)" autonomyResult="1400"
          imagem="assets/DassaultMirage_4000.jpg" />

        <ItemLista 
          jet="Rockwell B-1" 
          kmh="Km/h" kmResult="2300"
          propulsion="Propulsion(Kp)" propulsionResult="8000"
          kg="Kg" kgResult="12.270"
          wgp="Wingspan(M)" wgpResult="9"
          length="Length(M)" lengthResult="15"
          autonomy="Autonomy(Km)" autonomyResult="1500"
          imagem="assets/RockwellB-1.jpg" />

        <ItemLista 
          jet="Saab S35E Draken" 
          kmh="Km/h" kmResult="2100"
          propulsion="Propulsion(Kp)" propulsionResult="5500"
          kg="Kg" kgResult="14.270"
          wgp="Wingspan(M)" wgpResult="13"
          length="Length(M)" lengthResult="18"
          autonomy="Autonomy(Km)" autonomyResult="1800"
          imagem="assets/Saab-S35E-Draken.jpg" />

        <ItemLista 
          jet="Panavia Tornado" 
          kmh="Km/h" kmResult="2420"
          propulsion="Propulsion(Kp)" propulsionResult="7475"
          kg="Kg" kgResult="10.200"
          wgp="Wingspan(M)" wgpResult="8"
          length="Length(M)" lengthResult="14"
          autonomy="Autonomy(Km)" autonomyResult="1350"
          imagem="assets/Panavia-tornado.jpg" />

        <ItemLista 
          jet="Northron RF 5E"
          kmh="Km/h" kmResult="3100"
          propulsion="Propulsion(Kp)" propulsionResult="12000"
          kg="Kg" kgResult="8.270"
          wgp="Wingspan(M)" wgpResult="11"
          length="Length(M)" lengthResult="13"
          autonomy="Autonomy(Km)" autonomyResult="1100"
          imagem="assets/NorthropRF-5E.jpg" />

        <ItemLista 
          jet="McDonnell Douglas RF4E"
          kmh="Km/h" kmResult="1800"
          propulsion="Propulsion(Kp)" propulsionResult="6400"
          kg="Kg" kgResult="12.270"
          wgp="Wingspan(M)" wgpResult="15"
          length="Length(M)" lengthResult="21"
          autonomy="Autonomy(Km)" autonomyResult="1900"
          imagem="assets/McDonnell_Douglas_RF-4E.jpg" />

        <ItemLista 
          jet="McDonnel Douglas F 18H" 
          kmh="Km/h" kmResult="2100"
          propulsion="Propulsion(Kp)" propulsionResult="9500"
          kg="Kg" kgResult="10.150"
          wgp="Wingspan(M)" wgpResult="10"
          length="Length(M)" lengthResult="14"
          autonomy="Autonomy(Km)" autonomyResult="1700"
          imagem="assets/McDonnellDouglasF-18H.jpg" />

        <ItemLista 
          jet="Gramman F 14 Tomcat"
          kmh="Km/h" kmResult="2950"
          propulsion="Propulsion(Kp)" propulsionResult="10000"
          kg="Kg" kgResult="9.430"
          wgp="Wingspan(M)" wgpResult="8.5"
          length="Length(M)" lengthResult="11"
          autonomy="Autonomy(Km)" autonomyResult="1700"
          imagem="assets/GrmmanF-14Tomcat.jpg" />

        <ItemLista 
          jet="Dessault Super Etendard"
          kmh="Km/h" kmResult="1900"
          propulsion="Propulsion(Kp)" propulsionResult="9000"
          kg="Kg" kgResult="12.270"
          wgp="Wingspan(M)" wgpResult="9"
          length="Length(M)" lengthResult="15"
          autonomy="Autonomy(Km)" autonomyResult="1500"
          imagem="assets/DessaultSuper_Etendard.jpg" />

        <ItemLista 
          jet="Saab ja37 Viggen"
          kmh="Km/h" kmResult="2300"
          propulsion="Propulsion(Kp)" propulsionResult="8000"
          kg="Kg" kgResult="12.270"
          wgp="Wingspan(M)" wgpResult="9"
          length="Length(M)" lengthResult="15"
          autonomy="Autonomy(Km)" autonomyResult="1500"
          imagem="assets/Saab-ja37-viggen.jpg" />

        <ItemLista 
          jet="Northrop FA 18L"
          kmh="Km/h" kmResult="2300"
          propulsion="Propulsion(Kp)" propulsionResult="8000"
          kg="Kg" kgResult="12.270"
          wgp="Wingspan(M)" wgpResult="9"
          length="Length(M)" lengthResult="15"
          autonomy="Autonomy(Km)" autonomyResult="1500"
          imagem="assets/Northrop-FA-18L.jpg" />

      </div>
    </div>
  )
}