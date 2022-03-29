import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>V-DAQ Coding Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem className="ion-no-padding">
          <IonLabel slot="start">Input</IonLabel>
          <IonInput placeholder="<your app code repo link>" />
        </IonItem>
        <br />
        <IonButton expand="block">Save URL</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
