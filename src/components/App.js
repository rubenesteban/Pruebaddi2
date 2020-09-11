import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { Input, Button, message } from 'antd';

const App = () =>  {

    const [ countQuestions, setCountQuestions ] = useState( 1 );
    const [ countScore, setCountScore ] = useState( 0 );
    const [ disableNext, setDisableNext ] = useState( true );
    const [ correct, setCorrect ] = useState( true );
    const [ disableConfirm, setDisableConfirm ] = useState( false );
    const [ countScoreTotal, setCountScoreTotal ] = useState( 0 );
    const [ dataQuestions, setDataQuestions ] = useState( [] );

    useEffect( () => {
        let linkQuestion = 'http://jservice.io/api/random';
        fetch( linkQuestion )
            .then( ( dataQuestion ) => {
                return dataQuestion.json();
            } )
            .then( ( questionJSONData ) => {
                setDataQuestions( questionJSONData );
            } );

    }, [] );

    useEffect( () => {
        let linkQuestion = 'http://jservice.io/api/random';
        fetch( linkQuestion )
            .then( ( dataQuestion ) => {
                return dataQuestion.json();
            } )
            .then( ( questionJSONData ) => {
                setDataQuestions( questionJSONData );
            } );

    }, [countQuestions] );

    const checkQuestion = () => {
        const answer = document.querySelector( '#answer' ).value.toLowerCase();
        dataQuestions.map( (question) => {
            return (
                question.answer.toLowerCase() === answer
                    ? (
                        setCorrect(true),
                        setCountScore(countScore + 10),
                            message.success('Respuesta Correcta')
                    )
                    : (
                        setCorrect(false),
                        setCountScore(countScore),
                            message.error('Respuesta Incorrecta')
                    ),
            setCountScoreTotal(100)
            );
        })
        setDisableNext(false);
        setDisableConfirm(true);
    };

    const nextQuestion = () => {
        setCountQuestions( countQuestions + 1 )
        document.querySelector( '#answer' ).value = "";
        setDisableConfirm(false);
        setDisableNext(true);
        setCorrect(true);
    };

    const reload = () => {
        window.location.reload(true);
    }


    return (
        <div style={{paddingLeft: "600px" }} >
            <div aling="center"><h1 >PREGUNTAS PRUEBA 2 </h1> <h2 > ( {countQuestions} / 10 )</h2></div>
                {
                    dataQuestions.map((question) => {
                        return (
                            <ul>
                                <li aling="left">Numero de Pregunta: {question.id} </li>
                                <li aling="left">Pregunta: ¿{question.question}?.</li>
                            </ul>

                        );
                    })
                }
            <Input className="tam-respue" placeholder="Ingrese su respuesta"
                   id='answer' disabled={disableConfirm} allowClear={true} onPressEnter={ checkQuestion }/>
            <Button type="primary" onClick={checkQuestion} disabled={disableConfirm}>Aceptar</Button>
            {correct
                ? ''
                : dataQuestions.map((question) => {
                    return (
                        <div><strong > La respuesta es: {question.answer}</strong></div>
                    );
                })
            }
            {countQuestions < 10
                ? <div className="separa-btn" id='previous-user'>
                    <Button type="primary" onClick={nextQuestion} disabled={disableNext}>Siguiente Pregunta</Button>
                    <h1>Puntaje: {countScore} / {countScoreTotal}</h1>
                </div>
                : (
                    <>
                        <h1>Puntaje: {countScore} / {countScoreTotal}</h1>
                        {
                            countScore >= countScoreTotal * 0.85 && countQuestions < 9
                                ? <h1> Ganaste </h1>
                                : <h1> Perdiste </h1>
                        }
                        <div className="separa-btn"
                             id='previous-user'><Button type="danger" onClick={reload}>Jugar denuevo</Button></div>
                    </>
                )
            }
        </div>
    );

}

export default App;
