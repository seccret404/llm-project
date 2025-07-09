import { ChevronRight, Star } from 'lucide-react';

export default function PageHeader() {
     return (
          <div className="mb-6">
               <div className="flex items-center text-sm text-gray-500 mb-1">
                    <span>Dashboard</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-blue-600 font-medium">Penilaian Wawancara</span>
               </div>
               <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Star className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" />
                    Evaluasi PMDK IT Del
               </h1>
          </div>
     );
}
