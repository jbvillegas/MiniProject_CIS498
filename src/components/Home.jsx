import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { fetchCategories, fetchCategoryDetails, deleteCategory, createCategory, updateCategory } from "../services/api";

const Home = () => {
  const { user } = useContext(DataContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    description: '',
    slug: '',
    created_at: ''
  });

  const isAdmin = user?.role_id === 1;
   useEffect(() => {
    console.log("User from context:", user);
  }, [user]); 
  

  // Fetch all categories on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetchCategories();
        const categoriesData = response.data;
        
        if (!Array.isArray(categoriesData)) {
          throw new Error("Expected array but got: " + typeof categoriesData);
        }
        
        setCategories(categoriesData);
        if (categoriesData.length > 0) {
          handleCategorySelect(categoriesData[0].id);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Handle category selection (click or hover)
  const handleCategorySelect = async (id) => {
    try {
      const response = await fetchCategoryDetails(id);
      const categoryDetails = response.data;
      if (categoryDetails && categoryDetails.id) {
        setSelectedCategory(categoryDetails);
      }
    } catch (err) {
      console.error("Error loading details:", err);
    }
  };

  // Handle hover with delay to prevent flickering
  const handleHover = (id) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    
    const timeout = setTimeout(() => {
      handleCategorySelect(id);
    }, 300);
    
    setHoverTimeout(timeout);
  };

  // Cancel hover action if mouse leaves before timeout
  const cancelHover = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreate = async () => {
    try {
      const slug = slugify(formData.name);
  
      const payload = {
        ...formData,
        slug,
      };
  
      const response = await createCategory(payload);
      setCategories([...categories, response.data]);
      setSelectedCategory(response.data);
      setIsCreating(false);
      setFormData({ name: '', description: '', slug: '' });
    } catch (err) {
      console.error("Create error:", err);
      setError("Failed to create category");
    }
  };
  

  const slugify = (text) => 
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
  
  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...formData,
        slug: slugify(formData.name), // ✅ Auto-generate slug from name
      };
  
      const response = await updateCategory(selectedCategory.id, updatedData);
  
      setCategories(categories.map(cat => 
        cat.id === selectedCategory.id ? response.data : cat
      ));
      setSelectedCategory(response.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
      setError("Failed to update category");
    }
  };
  

  // Admin delete function
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category permanently?")) return;
    
    try {
      await deleteCategory(id);
      setCategories(prev => {
        const updated = prev.filter(c => c.id !== id);
        if (selectedCategory?.id === id) {
          setSelectedCategory(updated[0] || null);
        }
        return updated;
      });
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Failed to delete category");
    }
  };

  // Start editing a category
  const startEditing = (category) => {
    setIsEditing(true);
    setIsCreating(false);
    setFormData({
      name: category.name,
      description: category.description || ''
    });
  };

  // Start creating a new category
  const startCreating = () => {
    setIsCreating(true);
    setIsEditing(false);
    setFormData({ name: '', description: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-50 rounded-lg shadow">
        <h3 className="text-xl font-bold text-red-700 mb-2">Error Loading Data</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 py-12 bg-gradient-to-r rounded-xl shadow-lg mb-7 mt-7">
  <h1 className="text-7xl font-extrabold bg-clip-text bg-gradient-to-r text-teal-400 mb-10 text-center font-serif tracking-wide">
    PORTFOLIO
  </h1>
  <p className="text-2xl text-gray-800 mb-6 leading-relaxed text-center max-w-8xl mx-auto font-medium">
    Welcome to <span className="font-bold text-teal-400">PORTFOLIO</span>, an online management system where you can explore other users' projects, showcase your own, and build connections to unlock new opportunities in the job market.
  </p>
</div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Category List */}
        <div className="lg:w-1/3 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            
            <h2 className="text-xl font-bold text-teal-400">CATEGORIES</h2>
            
            {isAdmin && (
            <button
              className="px-3 py-1 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition-colors flex items-center gap-1"
              onClick={startCreating}
            >
              Add
            </button>
          )}


          </div>
          
          {isCreating && (
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                name="name"
                placeholder="Category Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
                rows="3"
              />

              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => setIsCreating(false)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleCreate}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          )}
          
          {categories.length === 0 ? (
            <div className="p-6 text-gray-500">No categories available</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {categories.map(category => (
                <li 
                  key={category.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    selectedCategory?.id === category.id ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                  onMouseEnter={() => handleHover(category.id)}
                  onMouseLeave={cancelHover}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-xl font-semibold text-gray-800">{category.name}</span>
                    {isAdmin && (
                      <div className="flex space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditing(category);
                          }}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors"
                          aria-label={`Edit ${category.name}`}
                        >
                         
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(category.id);
                          }}
                          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                          aria-label={`Delete ${category.name}`}
                        >
                        
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden">
          {isEditing ? (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-teal-400 mb-6">Edit Category</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-2 text-lg">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-2 text-lg">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="4"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 font-bold text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleUpdate}
                    className="px-4 py-2 font-bold bg-teal-500 text-white rounded hover:bg-teal-400 transition-colors duration-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ) : selectedCategory ? (
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-teal-400">{selectedCategory.name} Details</h2>
                {isAdmin && (
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => startEditing(selectedCategory)}
                      className="px-3 py-1 bg-yellow-500 font-bold text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-1"
                    >
                    
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(selectedCategory.id)}
                      className="px-3 py-1 bg-red-500 font-bold text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-1"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-black text-lg text-gray-700 mb-2">Description</h3>
                  <p className="text-gray-600 text-lg">{selectedCategory.description || "No description available"}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-black text-lg text-gray-700 mb-2">Created Date</h3>
                    <p className="text-gray-600 text-lg">{new Date(selectedCategory.created_at).toLocaleDateString()}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-black text-lg text-gray-700 mb-2">Project Count</h3>
                    <p className="text-gray-600 text-lg">{selectedCategory.project_count || 0}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 flex items-center justify-center h-full">
              <div className="text-center">
                
                <p className="mt-4 text-gray-500">Select a category to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;