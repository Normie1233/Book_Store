import mongoose from 'mongoose';

const bookSchema= mongoose.schema(
    {
        title:{
            type: string,
            required : true,
        },
        author:{
            type:string,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,

        }
    },
    {
        timestamps:true,

    }
)

export const book = mongoose.model('book', bookSchema);
