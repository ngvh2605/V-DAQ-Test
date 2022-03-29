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
import { useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [input, setInput] = useState("");

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
          <IonInput
            placeholder="<your app code repo link>"
            value={input}
            onIonChange={(e) => setInput(e.detail.value!)}
            clearInput={true}
          />
        </IonItem>
        <br />
        <IonButton
          expand="block"
          onClick={() => {
            console.log(input);
          }}
        >
          Save URL
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
