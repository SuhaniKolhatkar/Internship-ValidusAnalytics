import streamlit as st 
import pandas as pd 
import matplotlib.pyplot as plt

st.title('Study and Exercise hours ')
st.markdown('## Daily Study and Exercise tracker  ')
st.text('This is a web app to extract information regarding my daily Stusy and Exercise hours ')
st.sidebar.title("Uploaded Data")

uploaded_file = st.sidebar.file_uploader('Upload your file here')

if uploaded_file :
    df = pd.read_csv(uploaded_file)
    st.write(df.head())
    st.header("Data Header")
    st.write(df.head(8))

    st.header("Data Tail")
    st.write(df.tail(8))

    fig , ax = plt.subplots(1,2)
    ax[0].scatter(x=df['Date'],y=df['StudyHours'])
    ax[0].set_xlabel('Date')
    ax[0].set_ylabel('Stusy Hours')

    ax[1].scatter(x=df['Date'],y=df['ExerciseHours'])
    ax[1].set_xlabel('Date')
    ax[1].set_ylabel('Exercise hours')

    st.pyplot(fig)
