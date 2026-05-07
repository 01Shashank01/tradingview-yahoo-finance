import pandas as pd


def calculate_bollinger_bands(data, period=20, std_dev=2):

    df = data.copy()

    # Middle Band (SMA)
    df['BB_MIDDLE'] = df['Close'].rolling(period).mean()

    # Standard Deviation
    rolling_std = df['Close'].rolling(period).std()

    # Upper Band
    df['BB_UPPER'] = (
        df['BB_MIDDLE']
        + (rolling_std * std_dev)
    )

    # Lower Band
    df['BB_LOWER'] = (
        df['BB_MIDDLE']
        - (rolling_std * std_dev)
    )

    return df[['BB_UPPER', 'BB_MIDDLE', 'BB_LOWER']]