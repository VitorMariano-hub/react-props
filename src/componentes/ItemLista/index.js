import React from 'react';
import './style.css';

export default function ItemLista(props) {
  return (
    <div className="boxJets">
      <div className="nomeJets">
        {props.jet}
      </div>
      
      <img className="imagemJets" src={props.imagem} alt={props.jet}/>
      
      <div className="atributos">
        <table className="table-jets">
          <tr>  
            <td>{props.kmh}</td>
            <td className="align-right">{props.kmResult}</td>
          </tr>
          <tr>  
            <td >{props.propulsion}</td>
            <td className="align-right">{props.propulsionResult}</td>
          </tr>
          <tr>  
            <td >{props.kg}</td>
            <td className="align-right">{props.kgResult}</td>
          </tr>
          <tr>  
            <td >{props.wgp}</td>
            <td className="align-right">{props.wgpResult}</td>
          </tr>
          <tr>  
            <td >{props.length}</td>
            <td className="align-right">{props.lengthResult}</td>
          </tr>
          <tr>  
            <td>{props.autonomy}</td>
            <td className="align-right">{props.autonomyResult}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
