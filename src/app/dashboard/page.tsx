import React from "react";
import { api } from "@/services/api";
import { cookies } from "next/headers";
import { AuthenticatedClient } from "@/providers/ClientContext.types";
import LisntInformation from "@/components/Information";
import Icon from "@/components/Icons";
import ClientCard from "@/components/ClientCard";

async function getClient() {
  const clientId = cookies().get("client.id")?.value;
  const token = cookies().get("client.token")?.value;
  const response = await api.get(`clients/${clientId}`);

  const contacts = await api.get("contacts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const authClient: AuthenticatedClient = {
    ...response.data,
    contacts: contacts.data,
  };

  return authClient;
}

export default async function DashboardPage() {
  const authClient = await getClient();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1>Dashboard Page</h1>
      <section className="w-full bg-white p-4">
        <ClientCard authClient={authClient}/>
        <LisntInformation information={authClient.information} ownerId={authClient.id} ownerInformation="clients"/>        
      </section>
      <ul>
        {authClient.contacts.map((contact, index) => (
          <li key={index}>{contact.name}</li>
        ))}
      </ul>
    </main>
  );
}
