import { ClipboardList } from 'lucide-react';

interface InterviewScoresProps {
     scores: {
          karir: number;
          motivasi: number;
          rekomendasi: number;
     };
}

export default function InterviewScores({ scores }: InterviewScoresProps) {
     return (
          <div className="bg-white rounded-xl shadow-md border border-gray-100 w-full lg:w-96 flex flex-col">
               <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                    <h2 className="font-medium text-lg">Skor Wawancara</h2>
               </div>

               <div className="p-6 flex flex-col space-y-5">
                    {scores.karir > 0 ? (
                         <div className="space-y-4">
                              <ScoreItem label="Karir" score={scores.karir} color="blue" />
                              <ScoreItem label="Motivasi" score={scores.motivasi} color="green" />
                              <ScoreItem label="Rekomendasi" score={scores.rekomendasi} color="purple" />
                         </div>
                    ) : (
                         <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                              <ClipboardList className="w-12 h-12 mb-2" />
                              <p className="text-center">Hasil analisis akan muncul di sini setelah Anda mengisi form dan menekan tombol "Analisis Wawancara"</p>
                         </div>
                    )}
               </div>
          </div>
     );
}

interface ScoreItemProps {
     label: string;
     score: number;
     color: 'blue' | 'green' | 'purple';
}

function ScoreItem({ label, score, color }: ScoreItemProps) {
     return (
          <div className={`p-4 bg-${color}-50 rounded-lg border-l-4 border-${color}-500`}>
               <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className={`text-2xl font-bold text-${color}-600`}>
                         {score.toFixed(1)}
                         <span className="text-sm font-normal text-gray-500">/100</span>
                    </span>
               </div>
               <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                         className={`bg-${color}-500 h-2 rounded-full`}
                         style={{ width: `${score}%` }}
                    />
               </div>
          </div>
     );
}
