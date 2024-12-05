import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { format } from 'date-fns';
import { Heart, Send } from 'lucide-react';

interface DiaryEntry {
  id: string;
  content: string;
  createdAt: Date;
  author: string;
}

const DiaryEntry: React.FC = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'diary'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const entriesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate()
      })) as DiaryEntry[];
      setEntries(entriesData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.trim() || !author.trim()) return;

    try {
      await addDoc(collection(db, 'diary'), {
        content: newEntry,
        author,
        createdAt: new Date()
      });
      setNewEntry('');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Tu nombre..."
          className="w-full mb-4 p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
        />
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Escribe tu mensaje de amor..."
          className="w-full h-32 p-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Enviar mensaje
        </button>
      </form>

      <div className="space-y-6">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="text-pink-500" size={20} />
              <span className="font-semibold text-pink-600">{entry.author}</span>
            </div>
            <p className="text-gray-700 mb-2">{entry.content}</p>
            <time className="text-sm text-gray-500">
              {format(entry.createdAt, "d 'de' MMMM, yyyy 'a las' HH:mm")}
            </time>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryEntry;