import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonBackButton,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <>
      <IonPage id="mainContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton/>
            </IonButtons>
            <IonTitle>Devices</IonTitle>
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
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle style={{textTransform:'uppercase'}}>{number} days ago</IonCardSubtitle>
                  <IonCardTitle>Device {number}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  CO2 - 20
                  CD - 3
                </IonCardContent>
              </IonCard>
            ))
          }
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
