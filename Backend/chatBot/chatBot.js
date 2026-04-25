import { ChatOpenAI } from "@langchain/openai"
import { ConversationalRetrievalQAChain } from "langchain/chains"
import { MemoryVectorStore } from "langchain/vectorstores/memory"
import { OpenAIEmbeddings } from "@langchain/openai"
import { BufferMemory } from "langchain/memory"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"

const build_chain = async ()=>{
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50,
    })
    const docs = await splitter.createDocuments(["your raw text here..."])


    const vectorStore = await MemoryVectorStore.fromDocuments(
        docs,
        new OpenAIEmbeddings()
    )


    const memory = new BufferMemory({
        memoryKey: "chat_history",
        returnMessages: true,
        outputKey: "text",
    })


    const chain = ConversationalRetrievalQAChain.fromLLM(
        new ChatOpenAI({ modelName: "gpt-4" }),
        vectorStore.asRetriever(),
        { memory }  
    )

    return chain;
}


const chat = async (query)=>{
    const resp = await chain.invoke({ question: query })
    return resp;
}
//const res1 = await chain.invoke({ question: "What is solar energy?" })
//const res2 = await chain.invoke({ question: "How does it compare to coal?" }) // remembers context

