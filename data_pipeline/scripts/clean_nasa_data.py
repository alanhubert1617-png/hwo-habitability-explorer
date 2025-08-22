import pandas as pd
import numpy as np

def clean_exoplanet_data():
    print("🧹 Cleaning NASA exoplanet data...")
    
    # Load raw data
    try:
        df = pd.read_csv('data_science/datasets/nasa_exoplanets.csv',
                        on_bad_lines='skip',  # Skip problematic lines
                        encoding='utf-8',     # Specify encoding
                        low_memory=False,     # Avoid dtype issues
                        quoting=3)            # Disable quote character
        print(f"Original dataset: {len(df)} planets")
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
        print("Please check if the file exists and is properly formatted.")
        return None
    
    # Keep only planets with essential data for habitability
    essential_columns = ['pl_name', 'pl_rade', 'pl_masse', 'pl_eqt', 'st_teff', 'sy_dist']
    df_clean = df[essential_columns].copy()
    
    # Remove rows with missing critical data
    df_clean = df_clean.dropna(subset=['pl_rade', 'pl_eqt', 'st_teff'])
    
    # Remove unrealistic values
    df_clean = df_clean[
        (df_clean['pl_rade'] > 0.1) & (df_clean['pl_rade'] < 20) &  # Reasonable planet sizes
        (df_clean['pl_eqt'] > 50) & (df_clean['pl_eqt'] < 3000) &   # Reasonable temperatures
        (df_clean['st_teff'] > 2000) & (df_clean['st_teff'] < 10000)  # Reasonable star temps
    ]
    
    # Add a simple habitability flag for training
    df_clean['potentially_habitable'] = (
        (df_clean['pl_rade'] >= 0.5) & (df_clean['pl_rade'] <= 2.5) &
        (df_clean['pl_eqt'] >= 180) & (df_clean['pl_eqt'] <= 320)
    ).astype(int)
    
    # Save cleaned data
    df_clean.to_csv('data_science/datasets/nasa_clean.csv', index=False)
    
    print(f"Clean dataset: {len(df_clean)} planets")
    print(f"Potentially habitable: {df_clean['potentially_habitable'].sum()}")
    print("✅ Cleaned data saved as 'nasa_clean.csv'")
    
    return df_clean

if __name__ == "__main__":
    clean_df = clean_exoplanet_data()
    if clean_df is None:
        exit(1)
