import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonBackButton,IonItem,IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <>
      <IonPage id="mainContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton/>
            </IonButtons>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent scrollY={true}>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          {
            [1,2,3,4].map((number) => (
              <IonItem>
                <IonLabel>Account Setting {number}</IonLabel>
              </IonItem>
            ))
          }
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab3;
