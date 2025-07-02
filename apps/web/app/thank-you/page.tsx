import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LuCheckCircle } from "react-icons/lu";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto border-0 shadow-xl">
          <Card.Header className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <LuCheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <Card.Title className="text-2xl">Thank You!</Card.Title>
            <Card.Description>
              Your message has been sent successfully. We'll get back to you as soon as possible.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-center">
            <p className="mb-6 text-gray-600">
              If you have any other questions or concerns, please don't hesitate to contact us again.
            </p>
            <Link href="/">
              <Button className="bg-black hover:bg-gray-800">
                Return to Home
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </main>
    </div>
  );
}