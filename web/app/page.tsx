"use client";

import { DietForm } from "./_components/diet-form";
import { useState } from "react";
import { DietGenerator } from "./_components/diet-generator";

interface DietData {
  nome: string;
  idade: number;
  altura_cm: number;
  peso_kg: number;
  sexo: "masculino" | "feminino";
  nivel_atividade: "sedentario" | "2x_semana" | "4x_semana";
  objetivo: "perda_de_peso" | "hipertrofia" | "manter_massa_muscular";
}

export default function Home() {
  const [data, setData] = useState<DietData | null>(null);

  function handleSubmit(userInfo: DietData) {
    setData(userInfo);
  }

  return (
    <>
      {!data ? (
        <DietForm onSubmit={handleSubmit} />
      ) : (
        <DietGenerator data={data} />
      )}
    </>
  );
} // ✅ fechamento da função Home