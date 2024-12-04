import  { useState } from 'react';

const FormEditor = () => {
  const [form, setForm] = useState({
    title: '',
    headerImage: '',
    questions: [],
  });

  const addQuestion = (type) => {
    setForm({
      ...form,
      questions: [
        ...form.questions,
        { type, questionText: '', options: [], image: '' },
      ],
    });
  };

  const handleInputChange = (index, field, value) => {
    const updatedQuestions = [...form.questions];
    updatedQuestions[index][field] = value;
    setForm({ ...form, questions: updatedQuestions });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Form Editor</h1>
      <input
        type="text"
        placeholder="Form Title"
        className="input input-bordered w-full mb-4"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <button
        className="btn btn-primary mb-4"
        onClick={() => addQuestion('Categorize')}
      >
        Add Categorize Question
      </button>
      <button
        className="btn btn-primary mb-4"
        onClick={() => addQuestion('Cloze')}
      >
        Add Cloze Question
      </button>
      <button
        className="btn btn-primary mb-4"
        onClick={() => addQuestion('Comprehension')}
      >
        Add Comprehension Question
      </button>

      <div>
        {form.questions.map((question, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <input
              type="text"
              placeholder="Question Text"
              className="input input-bordered w-full mb-2"
              value={question.questionText}
              onChange={(e) =>
                handleInputChange(index, 'questionText', e.target.value)
              }
            />
            {question.type === 'Categorize' && (
              <input
                type="text"
                placeholder="Options (comma-separated)"
                className="input input-bordered w-full mb-2"
                onChange={(e) =>
                  handleInputChange(
                    index,
                    'options',
                    e.target.value.split(',')
                  )
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormEditor;
