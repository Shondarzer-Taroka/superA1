



import React, { useState } from "react";
import ReactQuill from "react-quill";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiImageOn, CiMenuKebab, CiGrid41 } from "react-icons/ci";
import { IoAddCircleSharp, IoCopy, IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const CategorizedForm = () => {
    const [categories, setCategories] = useState([
        { name: "cat 1", content: "", showEditor: false },
        { name: "cat 2", content: "", showEditor: false },
    ]);
    const [answers, setAnswers] = useState([
        { name: "ans 1", content: "", showEditor: false },
        { name: "ans 2", content: "", showEditor: false },
    ]);

    // Handle adding a new category
    const handleAddCategory = () => {
        setCategories([
            ...categories,
            { name: `cat ${categories.length + 1}`, content: "", showEditor: false },
        ]);
    };

    // Handle adding a new answer
    const handleAddAnswer = () => {
        setAnswers([
            ...answers,
            { name: `ans ${answers.length + 1}`, content: "", showEditor: false },
        ]);
    };

    // Handle removing a category
    const handleRemoveCategory = (index) => {
        setCategories(categories.filter((_, i) => i !== index));
    };

    // Handle removing an answer
    const handleRemoveAnswer = (index) => {
        setAnswers(answers.filter((_, i) => i !== index));
    };

    // Handle updating category content
    const handleCategoryContentChange = (index, value) => {
        const updatedCategories = [...categories];
        updatedCategories[index].content = value;
        setCategories(updatedCategories);
    };

    // Handle updating answer content
    const handleAnswerContentChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].content = value;
        setAnswers(updatedAnswers);
    };

    // Toggle editor visibility
    const toggleEditor = (index, type) => {
        if (type === "category") {
            const updatedCategories = [...categories];
            updatedCategories.forEach((cat, i) => {
                cat.showEditor = i === index;
            });
            setCategories(updatedCategories);
        } else {
            const updatedAnswers = [...answers];
            updatedAnswers.forEach((ans, i) => {
                ans.showEditor = i === index;
            });
            setAnswers(updatedAnswers);
        }
    };

    return (
        <section className="p-4 bg-gray-50 min-h-screen">
            <aside className="flex gap-4">
                <div className="w-[900px] bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg font-bold">Question 1</h1>
                        <button className="text-gray-500 hover:text-gray-700">
                            <CiMenuKebab className="text-xl" />
                        </button>
                    </div>

                    <div id="container-input" className="flex gap-4 mb-6">
                        <div className="flex items-center gap-2 flex-1">
                            <input
                                type="text"
                                placeholder="Enter description"
                                className="w-full px-4 py-2 border rounded-md focus:outline-blue-500"
                            />
                            <CiImageOn className="text-gray-600 text-xl cursor-pointer" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                Categorize
                                <FaRegCircleQuestion className="text-blue-500 cursor-pointer" />
                            </label>
                            <input
                                type="text"
                                placeholder="Points"
                                className="w-20 px-4 py-2 border rounded-md focus:outline-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-gray-700 font-semibold mb-2">Categories</h2>
                        <div className="space-y-2 mb-6">
                            {categories.map((category, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <CiGrid41 className="text-blue-500" />
                                        <input
                                            type="text"
                                            value={category.name}
                                            onChange={(e) => {
                                                const updatedCategories = [...categories];
                                                updatedCategories[index].name = e.target.value;
                                                setCategories(updatedCategories);
                                            }}
                                            onFocus={() => toggleEditor(index, "category")}
                                            className="w-32 px-2 py-1 border rounded-md focus:outline-blue-500"
                                        />
                                        <button
                                            className="text-gray-500 hover:text-red-500"
                                            onClick={() => handleRemoveCategory(index)}
                                        >
                                            <IoClose className="text-xl" />
                                        </button>
                                    </div>
                                    {category.showEditor && (
                                        <ReactQuill
                                            className="w-[400px] border rounded-md"
                                            value={category.content}
                                            onChange={(value) => handleCategoryContentChange(index, value)}
                                        />
                                    )}
                                </div>
                            ))}
                            <input
                                type="text"
                                placeholder="Optional cat"
                                onFocus={handleAddCategory}
                                className="w-32 px-2 py-1 border rounded-md focus:outline-blue-500"
                            />
                        </div>

                        <h2 className="text-gray-700 font-semibold mb-2">Answers</h2>

                        <div className="ans-cont">


                            <div className="space-y-2">
                                {answers.map((answer, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <CiGrid41 className="text-green-500" />
                                            <input
                                                type="text"
                                                value={answer.name}
                                                onChange={(e) => {
                                                    const updatedAnswers = [...answers];
                                                    updatedAnswers[index].name = e.target.value;
                                                    setAnswers(updatedAnswers);
                                                }}
                                                onFocus={() => toggleEditor(index, "answer")}
                                                className="w-32 px-2 py-1 border rounded-md focus:outline-green-500"
                                            />
                                            <button
                                                className="text-gray-500 hover:text-red-500"
                                                onClick={() => handleRemoveAnswer(index)}
                                            >
                                                <IoClose className="text-xl" />
                                            </button>
                                        </div>
                                        {answer.showEditor && (
                                            <ReactQuill
                                                className="w-[400px] border rounded-md"
                                                value={answer.content}
                                                onChange={(value) => handleAnswerContentChange(index, value)}
                                            />
                                        )}
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    placeholder="Optional ans"
                                    onFocus={handleAddAnswer}
                                    className="w-32 px-2 py-1 border rounded-md focus:outline-green-500"
                                />
                            </div>


                            <div id="corrtect ans dropdown">
                              <select>
                                <option value={'cate 1'}> Cat 1</option>
                                <option value={'cate 2'}> Cat 2</option>
                              </select>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-xl text-gray-600">
                    <button className="hover:text-green-500">
                        <IoAddCircleSharp />
                    </button>
                    <button className="hover:text-blue-500">
                        <IoCopy />
                    </button>
                    <button className="hover:text-red-500">
                        <MdDelete />
                    </button>
                </div>
            </aside>
        </section>
    );
};

export default CategorizedForm;
