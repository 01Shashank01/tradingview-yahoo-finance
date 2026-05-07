import pandas as pd


def calculate_stochastic(
    data,
    k_period=14,
    d_period=3,
    smooth_k=3
):

    df = data.copy()

    # =====================================================
    # LOWEST LOW & HIGHEST HIGH
    # =====================================================

    lowest_low = df['Low'].rolling(
        window=k_period
    ).min()

    highest_high = df['High'].rolling(
        window=k_period
    ).max()

    # =====================================================
    # FAST %K
    # =====================================================

    fast_k = (
        (
            df['Close'] - lowest_low
        ) / (
            highest_high - lowest_low
        )
    ) * 100

    # =====================================================
    # SMOOTHED %K
    # =====================================================

    slow_k = fast_k.rolling(
        window=smooth_k
    ).mean()

    # =====================================================
    # %D SIGNAL LINE
    # =====================================================

    slow_d = slow_k.rolling(
        window=d_period
    ).mean()

    # =====================================================
    # OUTPUT
    # =====================================================

    result = pd.DataFrame({

        'STOCH_K': slow_k,

        'STOCH_D': slow_d

    })

    return result