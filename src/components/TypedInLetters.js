import React, {Component} from 'react';
import CounterOfAnswers from './CounterOfAnswers'
import './Keyboard.css'
class TypedInLetters extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            answer: this.props.answer,
            answerLook: ""
        }
        this.changeLetterInAnswerLook = this.changeLetterInAnswerLook.bind(this);
    } 

    componentDidMount(){
        var helpfullString = "";
        for( var i = 0 ; i < this.state.answer.length ; i++ ){
           if(this.state.answer.charAt(i) === " ")
            helpfullString += " ";
           else
            helpfullString += "_";  
           

        }
        this.setState({
            answerLook: helpfullString
        });
        
    }

    componentWillReceiveProps(nextProps){
        this.changeLetterInAnswerLook(nextProps.newCharacter)        
    }

   
    changeLetterInAnswerLook(nextCharacter){
        var helpfullString = this.state.answerLook;

        for( var i = 0 ; i < this.state.answerLook.length ; i++ )
            if(this.state.answer.charAt(i) === nextCharacter)
             helpfullString = helpfullString.substr(0, i) + nextCharacter + helpfullString.substr(i + 1 , this.state.answerLook.length);
             console.log(helpfullString)
        this.setState({
                answerLook: helpfullString
            });
        
    }

    render(){
        return(
            <div>
            <div className="Typed-letters">{this.state.answerLook}</div>
            <CounterOfAnswers typedCharacter={this.props.newCharacter} correctString={this.props.answer}/>
            </div>
        );
    }


}

export default TypedInLetters;