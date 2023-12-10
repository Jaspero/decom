import {firestore} from "firebase-admin";
import * as functions from "firebase-functions";
import {REGION} from "../shared/consts/region.const";

export const usercreated = functions
  .region(REGION)
  .auth.user()
  .onCreate(async (user) => {
    if (!user.email || user.customClaims?.role) {
      return;
    }

    const fs = firestore();

    const userDoc = await fs.collection("customers").doc(user.uid).get();

    if (!userDoc.exists) {
      await fs.collection("customers").doc(user.uid).set({
        createdOn: user.metadata.creationTime,
        email: user.email,
      });
    }
  });
