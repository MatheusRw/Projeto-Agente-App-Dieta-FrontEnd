import { Card } from '@/components/ui/card';
import { Utensils } from 'lucide-react';
import { z } from 'zod';

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
    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <Card className='w-full max-w-2xl border-0'>
                <div className='p-8'>
                    <div className='text-center mb-8'>
                        <div className='flex items-center justify-center mb-4 mx-auto'>
                            <Utensils className='w-14 h-14 text-green-500'  />
                        </div>
                        <h1 className='text-3xl font-bold mt-4 text-green-500 mb-2'>Calcule sua dieta</h1>
                    </div>
                </div>
            </Card>
        </div>
    );
}