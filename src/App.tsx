import { useState } from 'react';
import AppLayout from './components/layouts/AppLayout';
import PageHeader from './components/ui/cardHeader';
import InterviewForm from './components/ui/interviewForm';
import InterviewScores from './components/ui/interviewScores';

interface Scores {
  karir: number;
  motivasi: number;
  rekomendasi: number;
  processed_text: string;
}

function App() {
  const [studentName, setStudentName] = useState('');
  const [interviewResult, setInterviewResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState<Scores>({
    karir: 0,
    motivasi: 0,
    rekomendasi: 0,
    processed_text: ''
  });

  const handleGrade = async () => {
    if (!studentName || !interviewResult) {
      alert('Mohon isi nama dan hasil wawancara terlebih dahulu');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://052c-2404-c0-5610-00-4ff-d074.ngrok-free.app/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: interviewResult }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get analysis');
      }

      const data = await response.json();
      setScores({
        karir: data.karir,
        motivasi: data.motivasi,
        rekomendasi: data.rekomendasi,
        processed_text: data.processed_text
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`Gagal menganalisis wawancara: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="h-full bg-gradient-to-br from-gray-50 to-blue-50 p-6 overflow-hidden">
        <div className="h-full max-w-6xl mx-auto flex flex-col">
          <PageHeader />

          <div className="flex flex-1 flex-col lg:flex-row gap-6 overflow-hidden">
            <InterviewForm
              studentName={studentName}
              interviewResult={interviewResult}
              isLoading={isLoading}
              setStudentName={setStudentName}
              setInterviewResult={setInterviewResult}
              handleGrade={handleGrade}
            />
            <InterviewScores scores={scores} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
