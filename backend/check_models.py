import os
import google.generativeai as genai

# Make sure you set your GOOGLE_API_KEY environment variable first
try:
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    print("Successfully configured API key.")
    print("-" * 20)
    print("Available Models:")

    for m in genai.list_models():
      # Check if the model supports the 'generateContent' method
      if 'generateContent' in m.supported_generation_methods:
        print(f"- {m.name}")

except KeyError:
    print("🔴 Error: GOOGLE_API_KEY environment variable not set.")
except Exception as e:
    print(f"🔴 An error occurred: {e}")
