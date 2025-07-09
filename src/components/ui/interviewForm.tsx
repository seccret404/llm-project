import type { Dispatch, SetStateAction } from 'react';
import { ClipboardList, Loader2, User } from 'lucide-react';

interface InterviewFormProps {
     studentName: string;
     interviewResult: string;
     isLoading: boolean;
     setStudentName: Dispatch<SetStateAction<string>>;
     setInterviewResult: Dispatch<SetStateAction<string>>;
     handleGrade: () => void;
}

export default function InterviewForm({
     studentName,
     interviewResult,
     isLoading,
     setStudentName,
     setInterviewResult,
     handleGrade
}: InterviewFormProps) {
     return (
          <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col flex-1 overflow-hidden">
               <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                    <h2 className="font-medium text-lg flex items-center gap-2">
                         <ClipboardList className="w-5 h-5" />
                         Form Wawancara
                    </h2>
               </div>

               <div className="p-6 flex flex-col flex-1 overflow-hidden space-y-4">
                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                              <User className="w-4 h-4 mr-2 text-blue-600" />
                              Nama Calon Mahasiswa
                         </label>
                         <input
                              type="text"
                              value={studentName}
                              onChange={(e) => setStudentName(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              placeholder="Masukkan nama lengkap"
                         />
                    </div>

                    <div className="flex-1 flex flex-col">
                         <label className="block text-sm font-medium text-gray-700 mb-2">
                              Catatan Hasil Wawancara
                         </label>
                         <textarea
                              rows={5}
                              value={interviewResult}
                              onChange={(e) => setInterviewResult(e.target.value)}
                              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                              placeholder="Tuliskan observasi dan penilaian wawancara..."
                         />
                    </div>

                    <button
                         onClick={handleGrade}
                         disabled={!studentName || !interviewResult || isLoading}
                         className={`mt-1 w-full py-3 px-4 rounded-lg text-white font-medium transition-all flex items-center justify-center ${isLoading || !studentName || !interviewResult
                                   ? 'bg-gray-400 cursor-not-allowed'
                                   : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                              }`}
                    >
                         {isLoading ? (
                              <>
                                   <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                   Sedang Menganalisis...
                              </>
                         ) : (
                              'Analisis Wawancara'
                         )}
                    </button>
               </div>
          </div>
     );
}
