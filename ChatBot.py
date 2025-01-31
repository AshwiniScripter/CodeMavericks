import streamlit as st
from groq import Groq
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate

groq_api_key = "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"

context_information = """
Vi Sync is an exclusive platform for students of Vishwakarma Institute of Information Technology (VIIT) to engage in various college activities.
Students can create and join hackathon groups, find flatmates for accommodation, and participate in college events such as presentations and club
activities. Key features include the ability to RSVP for events, set reminders, post for publicity, and manage attendance. If a student misses a 
lecture while participating in a hackathon or event, they can upload valid proof to ensure their attendance is not affected. Additionally, Vi Sync
offers a rental service for equipment, ranging from electronics to convenient travel options like bicycles. The platform also awards frequent 
badges and loyalty points, allowing members to compete on a leaderboard. Vi Sync aims to foster community building and streamline event 
participation for students at VIIT
"""

def main():
    st.title("Vishwasahayak: VIsync chatbot")
    
    model = 'Mixtral-8x7b-32768'
    conversational_memory_length = 5

    memory = ConversationBufferMemory(k=conversational_memory_length)
    memory.save_context({'input': 'System context'}, {'output': context_information})

    user_question = st.text_area("Ask a question...")

    if 'chat_history' not in st.session_state:
        st.session_state.chat_history = []
    else:
        for message in st.session_state.chat_history:
            memory.save_context({'input': message['human']}, {'output': message['AI']})

    groq_chat = ChatGroq(groq_api_key=groq_api_key, model_name=model)
    conversation = ConversationChain(llm=groq_chat, memory=memory)

    st.markdown("""
        <style>
            .context-info {
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 15px;
                font-family: 'Arial', sans-serif;
                font-size: 16px;
                color: white; /* Change text color to white */
                background-color: #333; /* Optionally, change background to dark for better contrast */
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                margin-bottom: 20px;
                text-align: justify; 
            }
        </style>
    """, unsafe_allow_html=True)

    if user_question:
        response = conversation(user_question)
        message = {"human": user_question, "AI": response['response']}
        st.session_state.chat_history.append(message)


        st.markdown(f'<div class="context-info">{response["response"]}</div>', unsafe_allow_html=True)

if __name__ == "__main__":
    main()
