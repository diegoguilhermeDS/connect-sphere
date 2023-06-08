import React from "react";
import { api } from "@/services/api";
import { cookies } from "next/headers";
import { AuthenticatedClient } from "@/providers/AuthContext.types";
import ClientCard from "@/components/ClientCard";
import ContactCard from "@/components/ContactCard";

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
    <main className="container-main justify-start gap-20 lg:gap-10 lg:flex-row-reverse lg:items-start lg:container lg:mx-auto lg:min-h-[600px]">
      <section className="lg:w-[40%] flex justify-end">
        <ClientCard authClient={authClient} />
      </section>
      <section className="w-full">
        <ul className="container-cards-contact">
          {authClient.contacts.map((contact, index) => (
            <ContactCard contact={contact} key={index} />
          ))}
        </ul>
      </section>
    </main>
  );
}
