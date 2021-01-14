import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist,directorslist } from './actions';
import { bindActionCreators } from 'redux';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import './App.css';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';

class App extends Component {
  
  componentWillMount(){
    this.props.movieslist();
    this.props.directorslist();
  }

  renderMovies = (movies) => (
    movies?
    movies.map(item=>(
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              {item.name}
            </IonCardTitle>
            <IonCardSubtitle>
              {item.news}
            </IonCardSubtitle>

          </IonCardHeader>
          <IonCardContent>
            <IonButton >Read</IonButton>
          </IonCardContent>
        </IonCard>
         )):null
  )
  render() {
    console.log(this.props);
   
    return (
      <IonApp> 
          <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Redux Store News App </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {this.renderMovies(this.props.data.directors)}
    </IonContent>
   </IonApp>
    );
  }
}

const mapStateToProps = (state)=> {
  return{
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     movieslist,
     directorslist
   },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);