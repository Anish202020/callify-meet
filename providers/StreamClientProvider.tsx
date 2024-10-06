"use client";
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { tokenProvider } from "@/actions/stream.actions";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!API_KEY) throw new Error("Stream API key is missing");

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <>Loading</>;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
export default StreamVideoProvider;
