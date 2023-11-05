import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/react";
import { useAuth } from "../auth"; // adjust the path according to your project structure

const Login: React.FC = () => {
  const { auth, setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can add your login logic
    // If login is successful, you can set loggedIn to true
    setAuth({ loggedIn: true });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>Username:</IonLabel>
        <IonInput
          value={username}
          onIonChange={(e) => setUsername(e.detail.value!)}
          placeholder="Enter Username"
        ></IonInput>
        <IonLabel>Password:</IonLabel>
        <IonInput
          type="password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
          placeholder="Enter Password"
        ></IonInput>
        <IonButton expand="full" onClick={handleLogin}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
