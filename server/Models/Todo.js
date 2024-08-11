const mongoose = require('mongoose');

// Define the schema with validation and timestamps
const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true, // Make the task field required
        trim: true // Automatically trim whitespace
    }
}, {
    timestamps: true // Add createdAt and updatedAt timestamps
});

// Create the model
const TodoModel = mongoose.model("todos", TodoSchema);

// Export the model
module.exports = TodoModel;
