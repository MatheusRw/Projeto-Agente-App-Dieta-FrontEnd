"use client";

import { Card } from '@/components/ui/card';
import { Utensils } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';

const dietSchema = z.object({
    nome: z.string().min(2, "O nome é obrigatório"),
    idade: z.number().positive(),
    peso_kg: z.number().positive(),
    altura_cm: z.number().positive(),
    sexo: z.enum(["masculino", "feminino"], { message: "Selecione o sexo" }),
    nivel_atividade: z.enum(["sedentário", "2x_semana", "4x_semana"], { message: "Selecione o nível de atividade" }),
    objetivo: z.enum(["perder_peso", "hipertrofia", "manter_massa_muscular"], { message: "Selecione o objetivo" }),
});

type DietSchemaFormData = z.infer<typeof dietSchema>;

interface DietFormProps {
    onSubmit: (data: DietSchemaFormData) => void;
}

export function DietForm({ onSubmit }: DietFormProps) {
    const form = useForm<DietSchemaFormData>({
        resolver: zodResolver(dietSchema),
        defaultValues: {
            nome: "",
            idade: undefined,
            altura_cm: undefined,
            peso_kg: undefined,
            sexo: undefined,
            nivel_atividade: undefined,
            objetivo: undefined,
        },
    });

    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <Card className='w-full max-w-2xl border-0'>
                <div className='p-8'>
                    <div className='text-center mb-8'>
                        <div className='flex items-center justify-center mb-4 mx-auto'>
                            <Utensils className='w-14 h-14 text-green-500' />
                        </div>
                        <h1 className='text-3xl font-bold mt-4 text-green-500 mb-2'>Calcule sua dieta</h1>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <div className='space-y-4'>
                                <h3 className='text-lg font-semibold text-gray-900 flex items-center'>Dados pessoais</h3>
                            </div>
                        </form>
                    </Form>
                </div>
            </Card>
        </div>
    );
}