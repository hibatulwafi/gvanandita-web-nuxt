<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["email"])) {
    $to = "info@gvanandita.com";
    $subject = "Pendaftaran Notifikasi";
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = "Ada email baru yang mendaftar untuk notifikasi: $email";

    $headers = "From: noreply@gvanandita.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Terima kasih! Email Anda berhasil dikirim.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Maaf, terjadi kesalahan saat mengirim email.'); window.location.href='index.html';</script>";
    }
} else {
    echo "<script>window.location.href='index.html';</script>";
}
?>
