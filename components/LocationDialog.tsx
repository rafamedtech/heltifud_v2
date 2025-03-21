"use client";

import { useEffect, useRef } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const LocationDialog = () => {
  const myRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    myRef.current?.click();
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger ref={myRef} className="hidden"></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">
            Cobertura del servicio
          </AlertDialogTitle>
          <AlertDialogDescription>
            Actualmente el servicio solo está disponible para Tijuana y
            Rosarito. <br /> Agradecemos su comprensión.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-green-600">
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LocationDialog;
