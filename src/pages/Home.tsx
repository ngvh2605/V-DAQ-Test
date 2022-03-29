import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const [presentToast] = useIonToast();
  const axios = require("axios");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://3ic8ifp6ye.execute-api.ap-southeast-2.amazonaws.com/prod/userData",
      headers: {
        "x-api-key": "5aa698ecbfa345838559ec6133fb9529",
      },
    })
      .catch((err: any) => {
        console.log("get err: ", err);
      })
      .then((response: any) => {
        console.log("get response: ", response);
        if (response && response.data && response.data.url) {
          setInput(response.data.url);
        }
      });
  }, []);

  const handlePost = () => {
    axios({
      method: "post",
      url: "https://3ic8ifp6ye.execute-api.ap-southeast-2.amazonaws.com/prod/userData",
      headers: {
        "x-api-key": "5aa698ecbfa345838559ec6133fb9529",
      },
      data: {
        url: input,
      },
    })
      .catch((err: any) => {
        console.log("post err: ", err);
        presentToast({
          message: "POST failed, please try again!",
          color: "danger",
          duration: 3000,
        });
      })
      .then((response: any) => {
        console.log("post response: ", response);
        presentToast({
          message: "POST successfully!",
          color: "success",
          duration: 3000,
        });
      });
  };

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
          disabled={!input}
          expand="block"
          onClick={() => {
            handlePost();
          }}
        >
          Save URL
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
