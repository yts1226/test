function FindProxyForURL(url, host)
{
    if (host == "eoa.bj-fanuc.com.cn")
        return "SOCKS5 192.168.133.11:10986";

    return "DIRECT";
}
