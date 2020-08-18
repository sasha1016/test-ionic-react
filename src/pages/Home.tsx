import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonItem, IonMenuButton,IonMenuToggle, IonButtons } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';

const Tab2: React.FC = () => {
  return (
    <>
        <IonMenu side='start' contentId='mainContent'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonMenuToggle>
                    <IonItem routerLink='/home'>
                        Home
                    </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem routerLink='/devices'>
                        Devices
                    </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem routerLink='/account'>
                        Account
                    </IonItem>
                </IonMenuToggle>
            </IonContent>
        </IonMenu>
        <IonPage id="mainContent">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Home Page 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ExploreContainer name="Home page" />
            </IonContent>
        </IonPage>
    </>
  );
};

export default Tab2;